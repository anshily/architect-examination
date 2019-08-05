package io.anshily.service;
import io.anshily.base.core.Result;
import io.anshily.model.ExamMessage;
import io.anshily.base.core.Service;
import io.anshily.model.QuestionTitle;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


/**
 * Created by anshi on 2019/08/05.
 */
public interface ExamMessageService extends Service<ExamMessage> {


    List<QuestionTitle> createExam(@RequestParam String token, @RequestParam Integer single,
                                   @RequestParam Integer multi, @RequestParam Integer judge, @RequestParam Integer material);


}
