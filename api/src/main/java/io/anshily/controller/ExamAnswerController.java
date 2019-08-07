package io.anshily.controller;
import io.anshily.base.core.Result;
import io.anshily.base.core.ResultGenerator;
import io.anshily.model.ExamAnswer;
import io.anshily.service.ExamAnswerService;
import io.anshily.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
* Created by anshi on 2019/08/05.
*/
@RestController
@RequestMapping("/exam/answer")
public class ExamAnswerController {
    @Resource
    private ExamAnswerService examAnswerService;

    @PostMapping("/add")
    public Result add(@RequestBody ExamAnswer examAnswer) {
        examAnswerService.save(examAnswer);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        examAnswerService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody ExamAnswer examAnswer) {
        examAnswerService.update(examAnswer);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        ExamAnswer examAnswer = examAnswerService.findById(id);
        return ResultGenerator.successResult(examAnswer);
    }

    @GetMapping("/list")
    public Result list(PageBean<ExamAnswer> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<ExamAnswer> list = examAnswerService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody ExamAnswer examAnswer) {
        PageBean<ExamAnswer> page = new PageBean<ExamAnswer>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(ExamAnswer.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<ExamAnswer> list = examAnswerService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    /*用户提交试卷后将分数*/
    @GetMapping("/getGrade")
    public Result getGrade(@RequestParam String token,@RequestParam Integer examid){
        Map<String,Object> map=examAnswerService.getGrade(token,examid);
        return ResultGenerator.successResult(map);
    }
}
