import {Injectable, Injector} from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpResponseBase
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

@Injectable()
export class AnHttpGuard implements HttpInterceptor  {
  constructor(private injector: Injector) {
  }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private checkStatus(ev: HttpResponseBase) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }

        console.error(`请求错误 ${ev.status}: ${ev.url}`);
    }

    private handleData(ev: HttpResponseBase): Observable<any> {
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // console.log(ev);

                if (ev instanceof HttpResponse) {
                    const body: any = ev.body;
                    // console.log(body)
                    if (body && body.code == 3002) {

                        console.error(`未登录或登录已过期，请重新登录。`, ``);
                        this.goTo('/login');
                        break;
                    }
                }
                break;
            case 403:
            case 404:
            case 500:
                // this.goTo(`/exception/${ev.status}`);
                alert("網絡錯誤");
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return throwError(ev);
                }
                break;
        }
        return of(ev);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cs = localStorage.getItem('user_token');
        const jwtReq = req.clone({
            headers: req.headers.set('X-SW-TOKEN', cs)
        });

        let url = req.url;

        // if (url.indexOf('login') === -1 && url.indexOf('register') === -1) {
        //     if (url.indexOf('?') === -1) {
        //         url = url + "?PHPSESSID=" + localStorage.getItem('session_id');
        //     } else {
        //         url = url + "&PHPSESSID=" + localStorage.getItem('session_id');
        //     }
        // }


        const newReq = req.clone({
            url: url
            // headers: ''
        });
        // console.log(newReq);
        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理
                if (event instanceof HttpResponseBase) return this.handleData(event);
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err)),
        );
    }
}
