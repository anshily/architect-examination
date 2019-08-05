package io.anshily.service.impl;

import io.anshily.dao.SimpleTestMapper;
import io.anshily.model.SimpleTest;
import io.anshily.service.SimpleTestService;
import io.anshily.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class SimpleTestServiceImpl extends AbstractService<SimpleTest> implements SimpleTestService {
    @Resource
    private SimpleTestMapper swSimpleTestMapper;

}
