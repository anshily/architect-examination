package io.anshily.service;
import io.anshily.base.core.Result;
import io.anshily.model.ExamMessage;
import io.anshily.base.core.Service;
import io.anshily.model.QuestionTitle;
import org.springframework.web.bind.annotation.RequestParam;

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
