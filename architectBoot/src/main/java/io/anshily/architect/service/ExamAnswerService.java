package io.anshily.architect.service;

import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.Service;
import io.anshily.architect.dto.TestRecord;
import io.anshily.architect.model.ExamAnswer;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;


/**
 * Created by anshi on 2019/08/05.
 */
public interface ExamAnswerService extends Service<ExamAnswer> {
    Map<Integer,Integer> getGrade( String token);
    void changeStatu(int examid);
    List<ExamAnswer> getExamErr(String token,int examid);
    Integer getExamStatu(int examid);
    void saveRecord(String token, TestRecord testRecord);

}
