import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Highlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="highlights">
                {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home.highlights.enabled', true]), 'frontmatter.home.highlights.weight'), (section_page, section_page_idx) => (
                    ((_.get(section_page, 'frontmatter.home.highlights.weight') > 0) || (_.get(section_page, 'frontmatter.home.highlights.weight') < 1)) && 
                        <section key={section_page_idx}>
                            {_.get(section_page, 'frontmatter.home.highlights.home_img') && 
                                <Link class="image" to={safePrefix(_.get(section_page, 'url'))}>
                                    <img src={safePrefix(_.get(section_page, 'frontmatter.home.highlights.home_img.path'))} data-position={_.get(section_page, 'frontmatter.home.highlights.home_img.data_position')} alt="" />
                                </Link>
                            }
                            <div class="content">
                                <header class="major">
                                    <h2>{_.get(section_page, 'frontmatter.title')}</h2>
                                    {markdownify(_.get(section_page, 'frontmatter.subtitle'))}
                                </header>
                                {markdownify(_.get(section_page, 'frontmatter.home.highlights.excerpt'))}
                                <ul class="actions">
                                    <li><Link to={safePrefix(_.get(section_page, 'url'))} class="button">Learn More</Link></li>
                                </ul>
                            </div>
                        </section>
                ))}
            </section>
        );
    }
}
