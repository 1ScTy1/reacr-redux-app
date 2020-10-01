import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/scss/main.scss'
import { setNewProject } from '../redux/reducers/project'

const Project = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [object, setObject] = useState({})
  const dispatch = useDispatch()
  const project = useSelector((s) => s.project.title)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <div>
        <button type="button" onClick={openModal}>
          Open Modal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="h-full">
            <div className="w-full p-4 flex flex-col modal">
              <input
                type="text"
                placeholder="Введите название проекта"
                onChange={(e) => setObject({ ...object, projectTitle: e.target.value })}
              />
              <input
                type="text"
                placeholder="Введите ссылку на картинку"
                onChange={(e) => setObject({ ...object, image: e.target.value })}
              />
              <div className="flex justify-between">
                <input
                  type="date"
                  onChange={(e) => setObject({ ...object, startDate: e.target.value })}
                />
                <input
                  type="date"
                  onChange={(e) => setObject({ ...object, endDate: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Введите имя руководителя"
                  className="mr-2"
                  onChange={(e) => setObject({ ...object, supervisor: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Введите имя ментора"
                  onChange={(e) => setObject({ ...object, admin: e.target.value })}
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-green-400 p-2 rounded border-2 border-green-400 hover:text-white hover:bg-green-400 hover:border-white"
                  onClick={() => {
                    closeModal()
                    dispatch(setNewProject(object))
                  }}
                >
                  Добавить
                </button>
                <button
                  type="button"
                  className="text-red-400 p-2 rounded border-2 border-red-400 hover:text-white hover:bg-red-400 hover:border-white"
                  onClick={() => closeModal()}
                >
                  Отмена
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
      <div>
        {project.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h2>{el.projectTitle}</h2>
            <span>
              {el.startDate} - {el.endDate}
            </span>
            <h2>{el.supervisor}</h2>
            <h2>{el.admin}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
