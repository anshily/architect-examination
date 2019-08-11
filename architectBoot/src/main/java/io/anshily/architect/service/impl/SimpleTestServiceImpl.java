package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.base.core.ServiceException;
import io.anshily.architect.dao.SimpleTestMapper;
import io.anshily.architect.dto.ErrRate;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;
import io.anshily.architect.model.User;
import io.anshily.architect.service.SimpleTestService;
import io.anshily.architect.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class SimpleTestServiceImpl extends AbstractService<SimpleTest> implements SimpleTestService {
    @Resource
    private SimpleTestMapper swSimpleTestMapper;
    @Resource
    private UserService userService;

    @Override
    public List<Question> simpleQuestionTest(String token) {
        /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        /*查询出当前用户的题型权限*/
        String type=swSimpleTestMapper.getQuestionType(user.getId());
        /*随机从题库中检索200道题目*/
        List<Question> list=swSimpleTestMapper.simpleQuestionTest(type);
        return list;
    }

    @Override
    public List<Map<String,Object>> orderQuestionTest(String token) {
       /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        /*查询出当前用户的题型权限*/
        String type=swSimpleTestMapper.getQuestionType(user.getId());
        /*随机从题库中检索200道题目*/
        List<Map<String,Object>> list=swSimpleTestMapper.orderQuestionTest(type);
        return list;
    }

    @Override
    public List<ErrRate> simpleTestErr(String token) {
       /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }

        /*查询出所有错题的List并按照id进行分组*/
        List<SimpleTest> list=swSimpleTestMapper.simpleTestErr(user.getId());
        /*创建存放所有错题以及错误率的list*/
        List<ErrRate> list1=new ArrayList<ErrRate>();
        for(int i=0;i<list.size();i++){
            /*先查询出当前错题错误次数*/
            Map<String, Object> map = swSimpleTestMapper.getErrSumByQuestionId(list.get(i).getQuestion_id());

            /*再查询出当前错题的总次数*/
            int all=swSimpleTestMapper.getSumByQuestionId(list.get(i).getQuestion_id());

            System.out.println(map.get("err"));
            float err = Float.parseFloat((map.get("err").toString())+ ".0f");

            ErrRate errRate=new ErrRate();
            errRate.setTitle((String) map.get("question_title"));
            errRate.setId(Integer.parseInt(map.get("question_bank_id").toString()));
            errRate.setErr(err);
            errRate.setAll(Float.parseFloat(all + ".0f"));

//            System.out.println(err);
//            System.out.println(map.get("question_title"));

            /*保存两位小数算出错误率*/
            float tmp=err/all;
            float rate=(Math.round(tmp*100)/100.0f);//如果要求精确4位就*10000然后/10000
            errRate.setId(list.get(i).getQuestion_id());
            errRate.setRate(rate);
            list1.add(errRate);
        }

        return list1;
    }

    @Override
    public List<ErrRate> normalTestErr(String token) {
       /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }

        /*查询出所有错题的List并按照id进行分组*/
        List<ExamAnswer> list=swSimpleTestMapper.normalTestErr(user.getId());
        /*创建存放所有错题以及错误率的list*/
        List<ErrRate> list1=new ArrayList<ErrRate>();
        for(int i=0;i<list.size();i++){
            /*先查询出当前错题错误次数*/
            int err=swSimpleTestMapper.getNormalErrSumByQuestionId(list.get(i).getQuestion_title_id());
            /*再查询出当前错题的总次数*/
            int all=swSimpleTestMapper.getNormalSumByQuestionId(list.get(i).getQuestion_title_id());
            /*保存两位小数算出错误率*/
            float tmp=err/all;
            float rate=(float)(Math.round(tmp*100)/100);//如果要求精确4位就*10000然后/10000

            ErrRate errRate=new ErrRate();
            errRate.setId(list.get(i).getQuestion_title_id());
            errRate.setRate(rate);
            list1.add(errRate);
        }

        return list1;
    }
}
