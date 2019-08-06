package io.anshily.dao;

import io.anshily.base.core.Mapper;
import io.anshily.model.ExamMessage;

import java.util.List;

public interface ExamMessageMapper extends Mapper<ExamMessage> {

    List<ExamMessage> getAllExam(int id);
}