package io.anshily.architect.controller;
import io.anshily.architect.base.core.PageBean;
import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.ResultGenerator;
import io.anshily.architect.base.core.ServiceException;
import io.anshily.architect.dto.SubmitExamAnswer;
import io.anshily.architect.dto.TestRecord;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.Record;
import io.anshily.architect.service.ExamAnswerService;
import com.github.pagehelper.PageHelper;
import io.anshily.architect.service.ExamMessageService;
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
    @Resource
    private ExamMessageService examMessageService;

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

    /*用户提交试卷后将分数返回*/
    @GetMapping("/getGrade")
    public Result getGrade(@RequestParam String token){
        Map<Integer,Integer> map=examAnswerService.getGrade(token);
        return ResultGenerator.successResult(map);
    }

    @GetMapping("/getExamErr")
    public Result getExamErr(@RequestParam String token,@RequestParam int examid){
        List<ExamAnswer> list=examAnswerService.getExamErr(token,examid);
        return ResultGenerator.successResult(list);
    }

    @PostMapping("/examAnswerArr")
    public Result examAnswerArr(@RequestBody SubmitExamAnswer answer){
        List<ExamAnswer> examAnswers = answer.getExamAnswers();
        /*先判断当前考试的状态是否为已提交，如果为2就抛出异常*/
        if(examAnswers.size()==0){
            throw new ServiceException(5001,"考试答案为空！");
        }
        int statu=examAnswerService.getExamStatu(examAnswers.get(0).getExamid());
        if(2==statu){
            throw new ServiceException(5002,"考试数据已经提交！");
        }
        /*先将考试答案存入数据库*/
        examAnswerService.save(examAnswers);
        /*修改考试状态为2，已提交,并计算出分数*/
        examAnswerService.changeStatu(answer.getExamid());
        return ResultGenerator.successResult();
    }

    @PostMapping("/saveRecord")
    public Result saveRecord(@RequestBody TestRecord testRecord){
        examAnswerService.saveRecord(testRecord);
        return ResultGenerator.successResult();
    }

    @GetMapping("/selectRecord")
    public Result selectRecord(@RequestParam String token){
        Record record=examAnswerService.selectRecord(token);
        return ResultGenerator.successResult(record);
    }
}
