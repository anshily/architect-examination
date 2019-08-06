package io.anshily.dao;

import io.anshily.base.core.Mapper;
import io.anshily.model.ExamAnswer;

public interface ExamAnswerMapper extends Mapper<ExamAnswer> {
    /*获取指定考试的123类正确题目数量*/
    Integer getCountOne(Integer examid);
     /*获取指定考试的6类正确题目数量*/
     Integer getCountSix(Integer examid);
}