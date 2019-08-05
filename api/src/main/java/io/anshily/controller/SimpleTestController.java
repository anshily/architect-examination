package io.anshily.controller;
import io.anshily.base.core.Result;
import io.anshily.base.core.ResultGenerator;
import io.anshily.model.SimpleTest;
import io.anshily.service.SimpleTestService;
import io.anshily.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by anshi on 2019/08/05.
*/
@RestController
@RequestMapping("/simple/test")
public class SimpleTestController {
    @Resource
    private SimpleTestService simpleTestService;

    @PostMapping("/add")
    public Result add(@RequestBody SimpleTest simpleTest) {
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
}
