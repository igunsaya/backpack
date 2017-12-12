/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import readme from 'react-native-bpk-component-star-rating/readme.md';

import iosScreenshotDefault from 'react-native-bpk-component-star-rating/screenshots/ios/default.png';
import androidScreenshotDefault from 'react-native-bpk-component-star-rating/screenshots/android/default.png';

import Paragraph from './../../components/Paragraph';
import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: 'By default, star ratings are shown in a static form. These can be set at half star intervals. ', // eslint-disable-line max-len
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Spinner Component',
        subText: '(iPhone 8 Simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Spinner Component',
        subText: '(Google Pixel Emulator)',
      },
    ],
  },
];

const NativeStarRatingPage = () => (<DocsPageBuilder
  title="Star Ratings"
  blurb={[
    <Paragraph>
      Star ratings are used for displaying a score within a given range.
    </Paragraph>,
  ]}
  components={components}
  readme={readme}
  showMenu={false}
/>);

export default NativeStarRatingPage;
