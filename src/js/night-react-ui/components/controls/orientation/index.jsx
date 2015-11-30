/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import OrientationControlsComponent from './orientation-controls-component'

export default {
  canvasControls: null,
  controls: OrientationControlsComponent,
  identifier: 'orientation',
  icon: 'controls/overview/orientation@2x.png',
  label: 'controls.overview.orientation',
  getInitialSharedState: (context) => {
    const flipExistedBefore = context.ui.operationExists('flip')
    const rotationExistedBefore = context.ui.operationExists('rotation')
    return {
      flipExistedBefore,
      rotationExistedBefore
    }
  },
  isSelectable: (ui) => {
    return ui.isOperationEnabled('rotation') ||
      ui.isOperationEnabled('flip')
  }
}
