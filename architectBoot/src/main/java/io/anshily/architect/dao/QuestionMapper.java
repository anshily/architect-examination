package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.Question;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QuestionMapper extends Mapper<Question> {
    List<Question> getRandomQuestionsByTypeCategoryN(@Param("type") Integer type,@Param("category") Integer category,@Param("n") Integer n);
}