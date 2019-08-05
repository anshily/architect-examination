package io.anshily.dao;

import io.anshily.base.core.Mapper;
import io.anshily.model.Question;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QuestionMapper extends Mapper<Question> {
    List<Question> getRandomQuestionsByTypeCategoryN(@Param("type") Integer type,@Param("category") Integer category,@Param("n") Integer n);
}