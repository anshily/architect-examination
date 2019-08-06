package io.anshily.controller;
import io.anshily.base.core.Result;
import io.anshily.base.core.ResultGenerator;
import io.anshily.model.ExamMessage;
import io.anshily.model.QuestionTitle;
import io.anshily.service.ExamMessageService;
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
@RequestMapping("/exam/message")
public class ExamMessageController {
    @Resource
    private ExamMessageService examMessageService;

    @PostMapping("/add")
    public Result add(@RequestBody ExamMessage examMessage) {
        examMessageService.save(examMessage);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        examMessageService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody ExamMessage examMessage) {
        examMessageService.update(examMessage);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        ExamMessage examMessage = examMessageService.findById(id);
        return ResultGenerator.successResult(examMessage);
    }

    @GetMapping("/list")
    public Result list(PageBean<ExamMessage> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<ExamMessage> list = examMessageService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody ExamMessage examMessage) {
        PageBean<ExamMessage> page = new PageBean<ExamMessage>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(ExamMessage.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<ExamMessage> list = examMessageService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    /*创建考试信息表  同时创建题面表对应考试id,四种题型设置默认值*/
    @GetMapping("/createExam")
    public Result createExam(@RequestParam String token,@RequestParam(defaultValue = "24") Integer single,@RequestParam(defaultValue = "24") Integer multi,@RequestParam(defaultValue = "24") Integer judge,@RequestParam(defaultValue = "7") Integer material ) {
        Map<String,Object> resMap = examMessageService.createExam(token, single, multi, judge, material);
        return ResultGenerator.successResult(resMap);
    }

    /*获取当前用户所有考试信息*/
    @GetMapping("/getAllExam")
    public Result getAllExam(@RequestParam String token) {
        List<ExamMessage> list = examMessageService.getAllExam(token);
        return ResultGenerator.successResult(list);
    }



}
