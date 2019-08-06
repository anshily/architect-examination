package io.anshily.service;
import io.anshily.model.ExamAnswer;
import io.anshily.base.core.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface ExamAnswerService extends Service<ExamAnswer> {
    Map<String,Object> getGrade( String token, Integer examid);

}
