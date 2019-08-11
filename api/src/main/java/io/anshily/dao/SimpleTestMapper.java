package io.anshily.dao;

import io.anshily.base.core.Mapper;
import io.anshily.model.ExamAnswer;
import io.anshily.model.ExamMessage;
import io.anshily.model.Question;
import io.anshily.model.SimpleTest;

import java.util.List;
import java.util.Map;

public interface SimpleTestMapper extends Mapper<SimpleTest> {
    List<Question> simpleQuestionTest(String type);
    List<Map<String,Object>> orderQuestionTest(String type);
    String getQuestionType(int id);
    List<SimpleTest> simpleTestErr(int id);
    List<ExamAnswer> normalTestErr(int id);
    Integer getErrSumByQuestionId(int questionid);
    Integer getSumByQuestionId(int questionid);
    Integer getNormalErrSumByQuestionId(int questionid);
    Integer getNormalSumByQuestionId(int questionid);
}