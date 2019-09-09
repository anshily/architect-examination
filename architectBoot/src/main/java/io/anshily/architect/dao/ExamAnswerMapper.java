package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.dto.TestRecord;
import io.anshily.architect.model.ExamAnswer;
import io.anshily.architect.model.Record;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ExamAnswerMapper extends Mapper<ExamAnswer> {
    /*获取指定考试的123类正确题目数量*/
    Integer getCountOne(Integer examid);
     /*获取指定考试的6类正确题目数量*/
     Integer getCountMore(Integer examid);
    Integer getExamGrade(int examid);
    void changeStatu(@Param(value="examid") int examid,@Param(value = "grade") int grade);
    List<ExamAnswer> getExamErr(int examid);
    Integer getExamStatu(int examid);
    Record getRecord(int userid);
    void updateRecord(@Param(value = "testRecord")TestRecord testRecord);
    void insertRecord(@Param(value = "testRecord")TestRecord testRecord);
}