package fun.imcoder.cloud.config.freemarker.tags;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import freemarker.core.Environment;
import freemarker.template.TemplateModelException;
import fun.imcoder.cloud.annotation.FreemarkerTag;
import fun.imcoder.cloud.common.PageRequest;
import fun.imcoder.cloud.config.imcoder.ImcoderConfig;
import fun.imcoder.cloud.model.CategoryContent;
import fun.imcoder.cloud.model.Content;
import fun.imcoder.cloud.service.CategoryContentService;
import fun.imcoder.cloud.service.ContentService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Component
@FreemarkerTag("content")
public class ContentTagDirective implements ImcoderFreemarkerTag {
    @Resource
    private ContentService contentService;
    @Resource
    private CategoryContentService categoryContentService;

    @Override
    public Object getData(int page, int size, Map params, Environment environment) throws TemplateModelException {
        CategoryContent cc = new CategoryContent();
        Integer categoryId;
        QueryWrapper<CategoryContent> ccWrapper = new QueryWrapper<>(cc);
        if (getInt(params, "categoryId") != null) {
            categoryId = getInt(params, "categoryId");
        } else {
            categoryId = Integer.valueOf(environment.__getitem__("categoryId").toString());
        }
        Content content = new Content();
        content.setCategoryId(categoryId);
        PageRequest<Content> pageRequest = new PageRequest<>();
        pageRequest.setPageNum(page);
        pageRequest.setPageSize(size);
        pageRequest.setParams(content);
        List<Content> list = contentService.customPage(pageRequest).getRecords();
        list.forEach(o -> o.setLink(ImcoderConfig.options.get(ImcoderConfig.OPTIONS_KEY_SITE_URL) + "/archives/" + o.getPath()));
        return list;
    }

}
