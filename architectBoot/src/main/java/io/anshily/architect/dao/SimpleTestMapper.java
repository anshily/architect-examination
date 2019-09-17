package io.anshily.architect.dao;


import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.dto.Page;
import io.anshily.architect.dto.RatePage;
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
    List<Integer> simpleTestErr(@Param(value = "id")int id,@Param(value = "start")int start, @Param(value = "pageSize")int pageSize);
    Integer getCountErr(int id);
    List<ExamAnswer> normalTestErr(int id);
    Map<String, Object> getErrSumByQuestionId(@Param(value = "questionid")int questionid,@Param(value = "userid")int userid);
    Integer getSumByQuestionId(@Param(value = "questionid")int questionid,@Param(value = "userid")int userid);
    Integer getNormalErrSumByQuestionId(int questionid);
    Integer getNormalSumByQuestionId(int questionid);
    List<Map<String,Integer>> QuestionTypeTest(@Param(value = "questiontype") int questiontype,@Param(value = "type")String type);
    List<Map<String,Integer>> getRandomTestByType(@Param(value = "type") int type,@Param(value = "category")Integer category);
}