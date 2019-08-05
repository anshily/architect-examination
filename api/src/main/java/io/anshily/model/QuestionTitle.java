package io.anshily.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sw_question_title")
public class QuestionTitle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 对应考试信息表的id
     */
    private Integer exam_id;

    /**
     * 对应的考试题目id
     */
    private Integer question_id;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * 新增时间
     */
    private Date add_time;

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
     * 获取对应考试信息表的id
     *
     * @return exam_id - 对应考试信息表的id
     */
    public Integer getExam_id() {
        return exam_id;
    }

    /**
     * 设置对应考试信息表的id
     *
     * @param exam_id 对应考试信息表的id
     */
    public void setExam_id(Integer exam_id) {
        this.exam_id = exam_id;
    }

    /**
     * 获取对应的考试题目id
     *
     * @return question_id - 对应的考试题目id
     */
    public Integer getQuestion_id() {
        return question_id;
    }

    /**
     * 设置对应的考试题目id
     *
     * @param question_id 对应的考试题目id
     */
    public void setQuestion_id(Integer question_id) {
        this.question_id = question_id;
    }

    /**
     * 获取状态（1：可用，0：不可用）
     *
     * @return statu - 状态（1：可用，0：不可用）
     */
    public Integer getStatu() {
        return statu;
    }

    /**
     * 设置状态（1：可用，0：不可用）
     *
     * @param statu 状态（1：可用，0：不可用）
     */
    public void setStatu(Integer statu) {
        this.statu = statu;
    }

    /**
     * 获取新增时间
     *
     * @return add_time - 新增时间
     */
    public Date getAdd_time() {
        return add_time;
    }

    /**
     * 设置新增时间
     *
     * @param add_time 新增时间
     */
    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }
}