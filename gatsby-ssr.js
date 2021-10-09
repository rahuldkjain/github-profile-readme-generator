import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="buymeacoffe-widget"
      data-name="BMC-Widget"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="rahuldkjain"
      data-description="Support me on Buy me a coffee!"
      data-message="Loved the tool🚀. Buy me a coffee to support the work!"
      data-color="#FF813F"
      data-position=""
      data-x_margin="18"
      data-y_margin="18"
    />
  ])
}