import React from 'react';
import _ from 'lodash';

import {getPages, markdownify, Link, safePrefix} from '../utils';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="spotlights special">
                {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home.spotlights.enabled', true]), 'frontmatter.home.spotlights.weight'), (section_page, section_page_idx) => (
                    ((_.get(section_page, 'frontmatter.home.spotlights.weight') > 0) || (_.get(section_page, 'frontmatter.home.spotlights.weight') < 1)) && 
                        <section key={section_page_idx}>
                            <header class="major">
                                <h3>{_.get(section_page, 'frontmatter.title')}</h3>
                            </header>
                            {_.get(section_page, 'frontmatter.home.spotlights.home_img_path') && 
                                <div class="image fit">
                                    <img src={_.get(section_page, 'frontmatter.home.spotlights.home_img_path')} alt="" />
                                </div>
                            }
                            {markdownify(_.get(section_page, 'frontmatter.home.spotlights.excerpt'))}
                            <ul class="actions special">
                                <li><Link to={safePrefix(_.get(section_page, 'url'))} class="button">Learn More</Link></li>
                            </ul>
                        </section>
                ))}
            </section>
        );
    }
}
