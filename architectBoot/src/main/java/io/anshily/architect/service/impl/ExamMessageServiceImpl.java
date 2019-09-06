package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.base.core.ServiceException;
import io.anshily.architect.dao.ExamMessageMapper;
import io.anshily.architect.model.ExamMessage;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.QuestionTitle;
import io.anshily.architect.model.User;
import io.anshily.architect.service.ExamMessageService;
import io.anshily.architect.service.QuestionService;
import io.anshily.architect.service.QuestionTitleService;
import io.anshily.architect.service.UserService;
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
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
       ExamMessage examMessage = new ExamMessage();
       examMessage.setAdd_time(new Date());
       examMessage.setCreatetime(new Date());
       examMessage.setUserid(user.getId());
       examMessage.setStatu(1);
       swExamMessageMapper.insert(examMessage);
        
        List<Question> singleQuestions=new ArrayList<Question>();
        List<Question> multiQuestions=new ArrayList<Question>();
        List<Question> judgeQuestions=new ArrayList<Question>();
        List<Question> materialQuestions=new ArrayList<Question>();
       /*当用户角色为特种工时  categoryid在15和25之间*/
        if(user.getCategory_id()>=15&&user.getCategory_id()<=25){
            judge=50;
            single=40;
            multi=5;
            singleQuestions = questionService.getRandomQuestionsByTypeCategoryN(1,user.getCategory_id(),single);
            multiQuestions = questionService.getRandomQuestionsByTypeCategoryN(2,user.getCategory_id(),multi);
            judgeQuestions = questionService.getRandomQuestionsByTypeCategoryN(3,user.getCategory_id(),judge);
        }else{
             singleQuestions = questionService.getRandomQuestionsByTypeCategoryN(1,user.getCategory_id(),single);
             multiQuestions = questionService.getRandomQuestionsByTypeCategoryN(2,user.getCategory_id(),multi);
             judgeQuestions = questionService.getRandomQuestionsByTypeCategoryN(3,user.getCategory_id(),judge);
             materialQuestions = questionService.getRandomQuestionsByTypeCategoryN(6,user.getCategory_id(),material);
        }

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
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        /*根据用户id查询出当前用户所有场次的考试 切考试场次状态为1*/
        List<ExamMessage> list=swExamMessageMapper.getAllExam(user.getId());
        return list;
    }
}
