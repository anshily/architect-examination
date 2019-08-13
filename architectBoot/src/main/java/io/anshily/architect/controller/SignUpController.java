package io.anshily.architect.controller;

import com.github.pagehelper.PageHelper;
import io.anshily.architect.base.core.PageBean;
import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.ResultGenerator;
import io.anshily.architect.dto.Page;
import io.anshily.architect.model.SignUp;
import io.anshily.architect.service.SignUpService;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by anshi on 2019/08/12.
*/
@RestController
@RequestMapping("/sign/up")
public class SignUpController {
    @Resource
    private SignUpService signUpService;

    @PostMapping("/add")
    public Result add(@RequestBody SignUp signUp) {
        signUpService.save(signUp);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        signUpService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SignUp signUp) {
        signUpService.update(signUp);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SignUp signUp = signUpService.findById(id);
        return ResultGenerator.successResult(signUp);
    }

    @GetMapping("/list")
    public Result list(PageBean<SignUp> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SignUp> list = signUpService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody SignUp signUp) {
        PageBean<SignUp> page = new PageBean<SignUp>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(SignUp.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<SignUp> list = signUpService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
    @PostMapping("/getSignUpMessage")
    public Result getSignUpMessage(@RequestBody Page page) {
        PageHelper.startPage(page.getPageNum(),page.getPageSize());
        List<SignUp> list = signUpService.getSignUpMessage();
        return ResultGenerator.successResult(list);
    }
}
