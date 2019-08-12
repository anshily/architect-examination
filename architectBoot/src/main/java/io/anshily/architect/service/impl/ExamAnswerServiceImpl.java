package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.base.core.ServiceException;
import io.anshily.architect.dao.ExamAnswerMapper;
import io.anshily.architect.dao.ExamMessageMapper;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.ExamMessage;
import io.anshily.architect.model.User;
import io.anshily.architect.service.ExamAnswerService;
import io.anshily.architect.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class ExamAnswerServiceImpl extends AbstractService<ExamAnswer> implements ExamAnswerService {
    @Resource
    private ExamAnswerMapper asExamAnswerMapper;
    @Resource
    private UserService userService;
    @Resource
    private ExamMessageMapper examMessageMapper;

    @Override
    public Map<Integer,Integer> getGrade(String token) {
        /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        List<ExamMessage> list = examMessageMapper.getAllExam(user.getId());
        Map<Integer,Integer> map=new HashMap<Integer,Integer>();
        for (int i=0;i<list.size();i++){
             /*先算出总分*/
            Integer grade=asExamAnswerMapper.getCountOne(list.get(i).getId());
            map.put(list.get(i).getId(),grade);
        }


        return map;
    }

    @Override
    public void changeStatu(int examid) {
        /*查询出当前考试的分数*/
        int grade=asExamAnswerMapper.getCountOne(examid);
        asExamAnswerMapper.changeStatu(examid,grade);
    }

    @Override
    public List<ExamAnswer> getExamErr(String token, int examid) {
        /*先查询token的状态，如果token为null，抛出异常*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        List<ExamAnswer> list=asExamAnswerMapper.getExamErr(examid);
        return list;

    }
}
