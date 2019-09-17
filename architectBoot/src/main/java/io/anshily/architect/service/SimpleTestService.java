package io.anshily.architect.service;
import io.anshily.architect.base.core.Service;
import io.anshily.architect.dto.ErrRate;
import io.anshily.architect.dto.Page;
import io.anshily.architect.dto.RatePage;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;

import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface SimpleTestService extends Service<SimpleTest> {
    List<Question> simpleQuestionTest(String token);
    List<Map<String,Object>> orderQuestionTest(String token);
    List<ErrRate>  simpleTestErr(RatePage ratePage);
    List<ErrRate>  normalTestErr(String token);
    List<Map<String,Integer>> QuestionTypeTest(String token,Integer questiontype);
    List<Map<String,Integer>> getRandomTestByType(String token,Integer type);

}
