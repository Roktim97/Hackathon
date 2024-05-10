import ReactModal from "react-modal"

const ReportModal = (prop) => {
  return (
    <ReactModal
        isOpen={prop.isOpen}
        onRequestClose={prop.onRequestClose}
    >
        <pre>
            {prop.report}
        </pre>
    </ReactModal>
  )
}

export default ReportModal