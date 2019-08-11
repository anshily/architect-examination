package io.anshily.architect.service;

import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.ExamAnswer;

import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface ExamAnswerService extends Service<ExamAnswer> {
    Map<Integer,Integer> getGrade( String token);
    void changeStatu(int examid);

}
