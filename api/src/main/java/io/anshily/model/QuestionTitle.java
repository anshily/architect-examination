package io.anshily.model;

import javax.persistence.*;

@Table(name = "sw_question_title")
public class QuestionTitle {
    @Id
    private Integer q_t_id;

    /**
     * 对应考试信息表的id
     */
    private Integer q_t_examid;

    /**
     * 对应的考试题目id
     */
    private Integer q_t_questionid;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * @return q_t_id
     */
    public Integer getQ_t_id() {
        return q_t_id;
    }

    /**
     * @param q_t_id
     */
    public void setQ_t_id(Integer q_t_id) {
        this.q_t_id = q_t_id;
    }

    /**
     * 获取对应考试信息表的id
     *
     * @return q_t_examid - 对应考试信息表的id
     */
    public Integer getQ_t_examid() {
        return q_t_examid;
    }

    /**
     * 设置对应考试信息表的id
     *
     * @param q_t_examid 对应考试信息表的id
     */
    public void setQ_t_examid(Integer q_t_examid) {
        this.q_t_examid = q_t_examid;
    }

    /**
     * 获取对应的考试题目id
     *
     * @return q_t_questionid - 对应的考试题目id
     */
    public Integer getQ_t_questionid() {
        return q_t_questionid;
    }

    /**
     * 设置对应的考试题目id
     *
     * @param q_t_questionid 对应的考试题目id
     */
    public void setQ_t_questionid(Integer q_t_questionid) {
        this.q_t_questionid = q_t_questionid;
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
}