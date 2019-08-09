package io.anshily.architect.service;
import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.ExamMessage;

import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface ExamMessageService extends Service<ExamMessage> {


    Map<String,Object> createExam(String token,
                   Integer single,
                   Integer multi,
                   Integer judge,
                   Integer material);

    List<ExamMessage> getAllExam(String token);

}
