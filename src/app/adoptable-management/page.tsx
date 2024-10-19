<<<<<<< HEAD
"use client";
import React, { useEffect, useState } from "react";
import { Table, Spin, Alert, message, Button, Modal, Input, Dropdown, Menu } from "antd";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  fetchAdoptionRequests,
  // fetchAdoptionRequestsByPetId,
  updateAdoptionRequestStatus,
} from "../../lib/features/adopt/adoptSlice";
import { fetchPetById } from "@/lib/features/pet/petSlice";

const AdoptableManagement: React.FC<{ petId?: string }> = ({ petId }) => {
const AdoptableManagement: React.FC<{ petId?: string }> = () => {
  const dispatch = useAppDispatch();
  const requestsStatus = useAppSelector((state) => state.adoption.status);
  const error = useAppSelector((state) => state.adoption.error);

  const [newStatus, setNewStatus] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [filter, setFilter] = useState<string>("ALL");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteRequestId, setDeleteRequestId] = useState<string | null>(null);
  const [filterButtonText, setFilterButtonText] = useState("Manage Requests");

  useEffect(() => {
    const fetchRequests = async () => {


        const requestsWithPetInfo = await Promise.all(
          requests.map(async (request: any) => {
            const pet = await dispatch(fetchPetById(request.petId)).unwrap();
            return {
              ...request,
              petName: pet.name,
              petImage: pet.image,
            };
            try {
              const pet = await dispatch(fetchPetById(request.petId)).unwrap();
              return {
                ...request,
                petName: pet.name,
                petImage: pet.image,
              };
            } catch (error) {
              console.error(`Failed to fetch pet info for request ${request._id}:`, error);
              // Removed the fallback object
            }
          })
        );

        setAdoptionRequestsWithPetInfo(requestsWithPetInfo);
        setAdoptionRequestsWithPetInfo(requestsWithPetInfo.filter(Boolean));
      } catch (error) {
        message.error("Failed to fetch adoption requests or pet information.");
      }
    fetchRequests();
  }, [dispatch]);

  const showModal = (requestId: string, status: string) => {
    setCurrentRequestId(requestId);
    setNewStatus(status);

          })
        ).unwrap();
        setAdoptionRequestsWithPetInfo((prevRequests) =>
          prevRequests.filter((request) => request._id !== currentRequestId) // Xóa yêu cầu khỏi danh sách "ALL"
          prevRequests.map((request) =>
            request._id === currentRequestId ? { ...request, status: "APPROVED", comment } : request
          )
        );
        message.success("Adoption request approved.");
      }


  const handleMenuClick = (e: any) => {
    setFilter(e.key);
    setFilterButtonText(getFilterButtonText(e.key));
  };
  const getFilterButtonText = (key: string) => {
    switch (key) {
      case "ALL":
        return "ALL ADOPTION REQUESTS";
      case "APPROVED":
        return "APPROVED ADOPTIONS";
      case "REJECTED":
        return "REJECTED ADOPTIONS";
      default:
        return "MANAGE REQUESTS";
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="ALL">SEE ALL ADOPTION REQUEST</Menu.Item>
      <Menu.Item key="APPROVED">ADOPTION APPROVED</Menu.Item>
      <Menu.Item key="REJECTED">ADOPTION REJECTED</Menu.Item>
      <Menu.Item key="ALL">ALL ADOPTION REQUESTS</Menu.Item>
      <Menu.Item key="APPROVED"> APPROVED ADOPTIONS</Menu.Item>
      <Menu.Item key="REJECTED">REJECTED ADOPTIONS</Menu.Item>
    </Menu>
  );

  const filteredRequests = adoptionRequestsWithPetInfo.filter((request) => {
    if (filter === "APPROVED") return request.status === "APPROVED";
    if (filter === "REJECTED") return request.status === "REJECTED";
    return true; // ALL
    return request.status !== "APPROVED" && request.status !== "REJECTED"; // ALL except APPROVED and REJECTED
  });

  const showDeleteModal = (requestId: string) => {
    setDeleteRequestId(requestId);
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = () => {
    if (deleteRequestId) {
      setAdoptionRequestsWithPetInfo((prevRequests) =>
        prevRequests.filter((request) => request._id !== deleteRequestId)
      );
      message.success("Adoption request removed from the list.");
    }
    setIsDeleteModalVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };
  const columns = [
    {
      title: "Pet Name",

      key: "action",
      render: (_: any, record: { _id: string; status: string }) => (
        <span>
          {record.status !== "APPROVED" && record.status !== "CANCELLED" && (
            <Button
          {record.status !== "APPROVED" && record.status !== "COMPLETED" && (
            <button
              onClick={() => showModal(record._id, "APPROVED")}
              type="primary"
              className="bg-green-500 hover:bg-green-600 text-white"
              style={{ marginRight: 8 }}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Approve
            </Button>
            </button>
          )}
          {record.status !== "REJECTED" && record.status !== "CANCELLED" && (
            <Button
            <button
              onClick={() => showModal(record._id, "REJECTED")}
              className="bg-red-500 hover:bg-red-600 text-white"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Reject
            </Button>
            </button>
          )}
          <button
            onClick={() => showDeleteModal(record._id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </span>
      ),
    },

        <>
          <Dropdown overlay={menu} trigger={['hover']}>
            <Button>
              Manage Requests <span>▼</span>
              {filterButtonText} <span>▼</span>
            </Button>
          </Dropdown>
          <Table dataSource={filteredRequests} columns={columns} rowKey="_id" />
@@ -202,6 +252,16 @@
          placeholder="Enter comment for this action"
        />
      </Modal>
      <Modal
        // title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p className="text-[20px] font-medium">Are you sure you want to remove this adoption request from the list?</p>
      </Modal>
    </div>
  );
};
=======
'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function AdoptableManagement() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='mt-[148px]'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="adoptable management tabs">
            <Tab label="SEE ALL ADOPTION REQUESTS" />
            <Tab label="SEE APPROVED REQUESTS" />
            <Tab label="SEE REJECTED REQUESTS" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
         helo
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          helo
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
       helo
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default AdoptableManagement;
>>>>>>> 8ff740cf28a094cbbed4b23e55566a1220e4de2f
