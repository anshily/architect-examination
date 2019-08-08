package io.anshily.service;
import io.anshily.dto.ErrRate;
import io.anshily.model.Question;
import io.anshily.model.SimpleTest;
import io.anshily.base.core.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface SimpleTestService extends Service<SimpleTest> {
    List<Question> simpleQuestionTest(String token);
    List<Question> orderQuestionTest(String token);
    List<ErrRate>  simpleTestErr(String token);

}
