package io.anshily.architect.controller;

import com.github.pagehelper.PageHelper;
import io.anshily.architect.base.core.PageBean;
import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.ResultGenerator;
import io.anshily.architect.base.core.ServiceException;
import io.anshily.architect.dto.ErrRate;
import io.anshily.architect.dto.SimpleTestDto;
import io.anshily.architect.dto.SumitTestAnswer;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;
import io.anshily.architect.model.User;
import io.anshily.architect.service.SimpleTestService;
import io.anshily.architect.service.UserService;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* Created by anshi on 2019/08/05.
*/
@RestController
@RequestMapping("/simple/test")
public class SimpleTestController {
    @Resource
    private SimpleTestService simpleTestService;
    @Resource
    private UserService userService;

    @PostMapping("/add")
    public Result add(@RequestBody SumitTestAnswer sumitTestAnswer) {
        SimpleTest simpleTest = sumitTestAnswer.getSimpleTest();

        User user = userService.getUserInfoByToken(sumitTestAnswer.getToken());
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        simpleTest.setUser_id(user.getId());
        simpleTest.setAdd_time(new Date());
        simpleTestService.save(simpleTest);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        simpleTestService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SimpleTest simpleTest) {
        simpleTestService.update(simpleTest);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SimpleTest simpleTest = simpleTestService.findById(id);
        return ResultGenerator.successResult(simpleTest);
    }

    @GetMapping("/list")
    public Result list(PageBean<SimpleTest> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SimpleTest> list = simpleTestService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody SimpleTest simpleTest) {
        PageBean<SimpleTest> page = new PageBean<SimpleTest>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(SimpleTest.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<SimpleTest> list = simpleTestService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/saveSimpleTest")
    public Result saveSimpleTest(@RequestBody SimpleTestDto simpleTestDto){
        User user=userService.getUserInfoByToken(simpleTestDto.getToken());
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        simpleTestDto.getSimpleTest().setUser_id(user.getId());
        simpleTestService.save(simpleTestDto.getSimpleTest());
        return ResultGenerator.successResult();
    }
    @GetMapping("/simpleQuestionTest")
    public Result simpleQuestionTest(@RequestParam String token) {
        List<Question> list=simpleTestService.simpleQuestionTest(token);
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("title",list);
        return ResultGenerator.successResult(map);
    }
    @GetMapping("/orderQuestionTest")
    public Result orderQuestionTest(@RequestParam String token) {
        List<Map<String,Object>> list=simpleTestService.orderQuestionTest(token);
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("title",list);
        return ResultGenerator.successResult(map);
    }
    @GetMapping("/simpleTestErrRate")
    public Result simpleTestErr(@RequestParam String token) {
        List<ErrRate> list=simpleTestService.simpleTestErr(token);
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("SimpleTestErrRate",list);
        return ResultGenerator.successResult(map);
    }
    @GetMapping("/normalTestErrRate")
    public Result normalTestErrRate(@RequestParam String token) {
        List<ErrRate> list=simpleTestService.normalTestErr(token);
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("normalTestErrRate",list);
        return ResultGenerator.successResult(map);
    }
    @GetMapping("/QuestionTypeTest")
    public Result QuestionTypeTest(@RequestParam String token,@RequestParam Integer questiontype) {
        List<Map<String,Integer>> list=simpleTestService.QuestionTypeTest(token,questiontype);
        return ResultGenerator.successResult(list);
    }


}
