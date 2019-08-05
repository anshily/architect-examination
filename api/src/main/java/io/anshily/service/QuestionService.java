package io.anshily.service;
import io.anshily.model.Question;
import io.anshily.base.core.Service;

import java.util.List;


/**
 * Created by anshi on 2019/08/01.
 */
public interface QuestionService extends Service<Question> {

//    Integer single, Integer multi,Integer judge, Integer material
    List<Question> getRandomQuestionsByTypeCategoryN(Integer type,Integer category,Integer n);

}
