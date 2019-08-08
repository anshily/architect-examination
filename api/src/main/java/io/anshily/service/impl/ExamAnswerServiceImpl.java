package io.anshily.service.impl;

import io.anshily.base.core.ServiceException;
import io.anshily.dao.ExamAnswerMapper;
import io.anshily.dao.ExamMessageMapper;
import io.anshily.model.ExamAnswer;
import io.anshily.model.ExamMessage;
import io.anshily.model.User;
import io.anshily.service.ExamAnswerService;
import io.anshily.base.core.AbstractService;
import io.anshily.service.UserService;
import org.springframework.jmx.export.annotation.ManagedOperation;
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
        /*分数计算  123类型题目全部1分一题 */
        /*先查询出正确的123类型的题目总数  再查询出正确的6类型的题目总数*/
            Integer grade=asExamAnswerMapper.getCountOne(list.get(i).getId());
            map.put(list.get(i).getId(),grade);
        }


        return map;
    }
}
