package io.anshily.architect.dao;


import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.Question;
import io.anshily.architect.model.SimpleTest;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

public interface SimpleTestMapper extends Mapper<SimpleTest> {
    List<Question> simpleQuestionTest(String type);
    List<Map<String,Object>> orderQuestionTest(String type);
    String getQuestionType(int id);
    List<SimpleTest> simpleTestErr(int id);
    List<ExamAnswer> normalTestErr(int id);
    Map<String, Object> getErrSumByQuestionId(int questionid);
    Integer getSumByQuestionId(int questionid);
    Integer getNormalErrSumByQuestionId(int questionid);
    Integer getNormalSumByQuestionId(int questionid);
    List<Map<String,Integer>> QuestionTypeTest(@Param(value = "questiontype") int questiontype,@Param(value = "type")String type);
    List<Map<String,Integer>> getRandomTestByType(@Param(value = "type") int type,@Param(value = "category")Integer category);
}