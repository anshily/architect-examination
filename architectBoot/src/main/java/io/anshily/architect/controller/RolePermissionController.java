package io.anshily.architect.controller;

import com.github.pagehelper.PageHelper;
import io.anshily.architect.base.core.PageBean;
import io.anshily.architect.base.core.Result;
import io.anshily.architect.base.core.ResultGenerator;
import io.anshily.architect.model.RolePermission;
import io.anshily.architect.service.RolePermissionService;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by anshi on 2019/08/02.
*/
@RestController
@RequestMapping("/role/permission")
public class RolePermissionController {
    @Resource
    private RolePermissionService rolePermissionService;

    @PostMapping("/add")
    public Result add(@RequestBody RolePermission rolePermission) {
        rolePermissionService.save(rolePermission);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        rolePermissionService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody RolePermission rolePermission) {
        rolePermissionService.update(rolePermission);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        RolePermission rolePermission = rolePermissionService.findById(id);
        return ResultGenerator.successResult(rolePermission);
    }

    @GetMapping("/list")
    public Result list(PageBean<RolePermission> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<RolePermission> list = rolePermissionService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody RolePermission rolePermission) {
        PageBean<RolePermission> page = new PageBean<RolePermission>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(RolePermission.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<RolePermission> list = rolePermissionService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
