package io.anshily.controller;
import io.anshily.base.core.Result;
import io.anshily.base.core.ResultGenerator;
import io.anshily.model.ExamMessage;
import io.anshily.model.Question;
import io.anshily.model.QuestionTitle;
import io.anshily.service.QuestionTitleService;
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
@RequestMapping("/question/title")
public class QuestionTitleController {
    @Resource
    private QuestionTitleService questionTitleService;

    @PostMapping("/add")
    public Result add(@RequestBody QuestionTitle questionTitle) {
        questionTitleService.save(questionTitle);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        questionTitleService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody QuestionTitle questionTitle) {
        questionTitleService.update(questionTitle);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        QuestionTitle questionTitle = questionTitleService.findById(id);
        return ResultGenerator.successResult(questionTitle);
    }

    @GetMapping("/list")
    public Result list(PageBean<QuestionTitle> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<QuestionTitle> list = questionTitleService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody QuestionTitle questionTitle) {
        PageBean<QuestionTitle> page = new PageBean<QuestionTitle>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(QuestionTitle.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<QuestionTitle> list = questionTitleService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @GetMapping("/getQuestionTitleByExamid")
    public Result getQuestionTitleByExamid(@RequestParam String token,@RequestParam Integer examid) {
       List<QuestionTitle> list=questionTitleService.getQuestionTitleByExamid(token, examid);
        return ResultGenerator.successResult(list);
    }


}
