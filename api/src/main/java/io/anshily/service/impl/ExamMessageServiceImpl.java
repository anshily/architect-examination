package io.anshily.service.impl;

import io.anshily.dao.ExamMessageMapper;
import io.anshily.model.ExamMessage;
import io.anshily.service.ExamMessageService;
import io.anshily.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class ExamMessageServiceImpl extends AbstractService<ExamMessage> implements ExamMessageService {
    @Resource
    private ExamMessageMapper swExamMessageMapper;

}
