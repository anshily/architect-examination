package io.anshily.architect.dao;


import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;

import java.util.List;

public interface SimpleTestMapper extends Mapper<SimpleTest> {
    List<Question> simpleQuestionTest(String type);
    List<Question> orderQuestionTest(String type);
    String getQuestionType(int id);
    List<SimpleTest> simpleTestErr(int id);
    List<ExamAnswer> normalTestErr(int id);
    Integer getErrSumByQuestionId(int questionid);
    Integer getSumByQuestionId(int questionid);
    Integer getNormalErrSumByQuestionId(int questionid);
    Integer getNormalSumByQuestionId(int questionid);
}