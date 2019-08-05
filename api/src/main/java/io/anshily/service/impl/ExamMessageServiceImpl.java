package io.anshily.service.impl;

import io.anshily.dao.ExamMessageMapper;
import io.anshily.model.ExamMessage;
import io.anshily.model.QuestionTitle;
import io.anshily.service.ExamMessageService;
import io.anshily.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class ExamMessageServiceImpl extends AbstractService<ExamMessage> implements ExamMessageService {
    @Resource
    private ExamMessageMapper swExamMessageMapper;

    @Override
    public List<QuestionTitle> createExam(String token,Integer single, Integer multi,Integer judge, Integer material) {
       /*通过用户token获取当前用户练题的类型（ABC三种类型中的一种）*/

       /*模拟题型为A*/
       int tmp=12;

        /**/



        return null;
    }
}
