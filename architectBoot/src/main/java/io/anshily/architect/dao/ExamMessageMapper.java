package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.ExamMessage;

import java.util.List;

public interface ExamMessageMapper extends Mapper<ExamMessage> {

    List<ExamMessage> getAllExam(int id);

}