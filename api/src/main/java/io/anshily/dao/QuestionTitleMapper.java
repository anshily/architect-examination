package io.anshily.dao;

import io.anshily.base.core.Mapper;
import io.anshily.model.QuestionTitle;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QuestionTitleMapper extends Mapper<QuestionTitle> {
    List<QuestionTitle> getQuestionTitleByExamid(@Param(value = "userid") int userid,@Param(value = "examid") Integer examid);
}