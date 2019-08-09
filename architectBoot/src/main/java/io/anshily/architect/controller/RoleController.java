package io.anshily.architect.controller;

import com.github.pagehelper.PageHelper;
import io.anshily.architect.base.core.PageBean;
import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.ResultGenerator;
import io.anshily.architect.model.Role;
import io.anshily.architect.service.RoleService;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by anshi on 2019/08/02.
*/
@RestController
@RequestMapping("/role")
public class RoleController {
    @Resource
    private RoleService roleService;

    @PostMapping("/add")
    public Result add(@RequestBody Role role) {
        roleService.save(role);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        roleService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody Role role) {
        roleService.update(role);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        Role role = roleService.findById(id);
        return ResultGenerator.successResult(role);
    }

    @GetMapping("/list")
    public Result list(PageBean<Role> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<Role> list = roleService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody Role role) {
        PageBean<Role> page = new PageBean<Role>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(Role.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<Role> list = roleService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
