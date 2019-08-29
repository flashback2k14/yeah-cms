import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <header class="major">
                    <h1>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h1>
                    {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))}
                </header>
                {_.get(this.props, 'pageContext.frontmatter.banner.show_scroll_button') && 
                    <ul class="actions fixed special">
                        <li><Link class="button large primary icon solo fa-angle-down scrolly" to="#main">
                            <span class="label">Learn More</span>
                            </Link></li>
                    </ul>
                }
            </section>
        );
    }
}
