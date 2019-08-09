package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.QuestionTitle;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QuestionTitleMapper extends Mapper<QuestionTitle> {
    List<QuestionTitle> getQuestionTitleByExamid(@Param(value = "userid") int userid,@Param(value = "examid") Integer examid);
}