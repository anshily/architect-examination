package io.anshily.architect.service;
import io.anshily.architect.base.core.Service;
import io.anshily.architect.dto.ErrRate;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;

import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface SimpleTestService extends Service<SimpleTest> {
    List<Question> simpleQuestionTest(String token);
    List<Question> orderQuestionTest(String token);
    List<ErrRate>  simpleTestErr(String token);
    List<ErrRate>  normalTestErr(String token);

}
