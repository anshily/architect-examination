package io.anshily.architect.model;

import javax.persistence.*;

@Table(name = "sw_sign_up")
public class SignUp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 公司名称
     */
    private String company_name;

    /**
     * 报名工种
     */
    private String work_type;

    /**
     * 用户姓名
     */
    private String name;

    /**
     * 电话
     */
    private String phone;

    /**
     * 状态（1：可用，0，不可用，2：已读状态）
     */
    private Integer statu;

    /**
     * 描述
     */
    private String subscribe;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取公司名称
     *
     * @return company_name - 公司名称
     */
    public String getCompany_name() {
        return company_name;
    }

    /**
     * 设置公司名称
     *
     * @param company_name 公司名称
     */
    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    /**
     * 获取报名工种
     *
     * @return work_type - 报名工种
     */
    public String getWork_type() {
        return work_type;
    }

    /**
     * 设置报名工种
     *
     * @param work_type 报名工种
     */
    public void setWork_type(String work_type) {
        this.work_type = work_type;
    }

    /**
     * 获取用户姓名
     *
     * @return name - 用户姓名
     */
    public String getName() {
        return name;
    }

    /**
     * 设置用户姓名
     *
     * @param name 用户姓名
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取电话
     *
     * @return phone - 电话
     */
    public String getPhone() {
        return phone;
    }

    /**
     * 设置电话
     *
     * @param phone 电话
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * 获取状态（1：可用，0，不可用，2：已读状态）
     *
     * @return statu - 状态（1：可用，0，不可用，2：已读状态）
     */
    public Integer getStatu() {
        return statu;
    }

    /**
     * 设置状态（1：可用，0，不可用，2：已读状态）
     *
     * @param statu 状态（1：可用，0，不可用，2：已读状态）
     */
    public void setStatu(Integer statu) {
        this.statu = statu;
    }

    /**
     * 获取描述
     *
     * @return subscribe - 描述
     */
    public String getSubscribe() {
        return subscribe;
    }

    /**
     * 设置描述
     *
     * @param subscribe 描述
     */
    public void setSubscribe(String subscribe) {
        this.subscribe = subscribe;
    }
}