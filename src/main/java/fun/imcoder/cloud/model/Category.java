package fun.imcoder.cloud.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.SqlCondition;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import fun.imcoder.cloud.base.BaseModel;
import fun.imcoder.cloud.config.imcoder.ImcoderConfig;
import lombok.Data;

import java.util.List;

/**
 * Category model
 *
 * @author cdd
 * @date 2020-03-06
 */
@Data
public class Category extends BaseModel {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private Integer parentId;
    @TableField(condition = SqlCondition.LIKE)
    private String name;
    private String alias;
    private Integer sort;
    private Integer status;
    private String listPage;
    private String detailPage;
    private String path;
    private String outLink;
    private String icon;
    private String imgs;
    private Integer type;
    private String keywords;
    private String description;

    @TableField(exist = false)
    private List<Category> children;
    @TableField(exist = false)
    private String modelName;
    @TableField(exist = false)
    private String[] multiImg;
    @TableField(exist = false)
    private String link;

}
