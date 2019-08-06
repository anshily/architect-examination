package io.anshily.service.impl;

import io.anshily.dao.ExamMessageMapper;
import io.anshily.model.ExamMessage;
import io.anshily.model.Question;
import io.anshily.model.QuestionTitle;
import io.anshily.model.User;
import io.anshily.service.ExamMessageService;
import io.anshily.base.core.AbstractService;
import io.anshily.service.QuestionService;
import io.anshily.service.QuestionTitleService;
import io.anshily.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class ExamMessageServiceImpl extends AbstractService<ExamMessage> implements ExamMessageService {
    @Resource
    private ExamMessageMapper swExamMessageMapper;
    @Resource
    private UserService userService;
    @Resource
    private QuestionService questionService;
    @Resource
    private QuestionTitleService questionTitleService;

    @Override
    public Map<String,Object> createExam(String token, Integer single, Integer multi, Integer judge, Integer material) {
       /*通过用户token获取当前用户练题的类型（ABC三种类型中的一种）*/

       /*模拟题型为A*/
//       int tmp=12;
       User user = userService.getUserInfoByToken(token);
        System.out.println(user.toString());
       ExamMessage examMessage = new ExamMessage();
       examMessage.setAdd_time(new Date());
       examMessage.setCreatetime(new Date());
       examMessage.setUserid(user.getId());
       examMessage.setStatu(1);
       swExamMessageMapper.insert(examMessage);

        System.out.println(examMessage.toString());

       List<Question> singleQuestions = questionService.getRandomQuestionsByTypeCategoryN(1,user.getCategory_id(),single);
       List<Question> multiQuestions = questionService.getRandomQuestionsByTypeCategoryN(2,user.getCategory_id(),multi);
       List<Question> judgeQuestions = questionService.getRandomQuestionsByTypeCategoryN(3,user.getCategory_id(),judge);
       List<Question> materialQuestions = questionService.getRandomQuestionsByTypeCategoryN(6,user.getCategory_id(),material);

       List<QuestionTitle> questionTitles = new ArrayList<QuestionTitle>();

        for (int i = 0; i < singleQuestions.size(); i++) {
            QuestionTitle questionTitle = new QuestionTitle();
            questionTitle.setExam_id(examMessage.getId());
            questionTitle.setQuestion_id(singleQuestions.get(i).getQuestion_bank_id());
            questionTitle.setAdd_time(new Date());
            questionTitle.setStatu(1);
            questionTitles.add(questionTitle);
        }

        for (int i = 0; i < multiQuestions.size(); i++) {
            QuestionTitle questionTitle = new QuestionTitle();
            questionTitle.setExam_id(examMessage.getId());
            questionTitle.setQuestion_id(multiQuestions.get(i).getQuestion_bank_id());
            questionTitle.setAdd_time(new Date());
            questionTitle.setStatu(1);
            questionTitles.add(questionTitle);
        }

        for (int i = 0; i < judgeQuestions.size(); i++) {
            QuestionTitle questionTitle = new QuestionTitle();
            questionTitle.setExam_id(examMessage.getId());
            questionTitle.setQuestion_id(judgeQuestions.get(i).getQuestion_bank_id());
            questionTitle.setAdd_time(new Date());
            questionTitle.setStatu(1);
            questionTitles.add(questionTitle);
        }

        for (int i = 0; i < materialQuestions.size(); i++) {
            QuestionTitle questionTitle = new QuestionTitle();
            questionTitle.setExam_id(examMessage.getId());
            questionTitle.setQuestion_id(materialQuestions.get(i).getQuestion_bank_id());
            questionTitle.setAdd_time(new Date());
            questionTitle.setStatu(1);
            questionTitles.add(questionTitle);
        }
        /*在题面表中插入所有题的信息*/
        questionTitleService.save(questionTitles);

        Map<String,Object> map = new HashMap<>();

        map.put("questionTitles", questionTitles);
        map.put("examMessage", examMessage);
        /**/
        return map;
    }

    @Override
    public List<ExamMessage> getAllExam(String token) {
        /*根据用户token查询出当前用户对象*/
        User user = userService.getUserInfoByToken(token);
        /*根据用户id查询出当前用户所有场次的考试 切考试场次状态为1*/
        List<ExamMessage> list=swExamMessageMapper.getAllExam(user.getId());
        return list;
    }
}
